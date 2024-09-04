import { Controller, Get, Query, Res } from "@nestjs/common";
import { Response } from "express";
import axios from "axios";
@Controller("/cafe24")
export class Cafe24Controller {
  @Get()
  getParams(@Query() query: Record<string, string>, @Res() res: Response) {
    // 각 쿼리 파라미터를 콘솔에 출력
    console.log("lang:", query.lang);
    console.log("mall_id:", query.mall_id);
    console.log("nation:", query.nation);
    console.log("shop_no:", query.shop_no);
    console.log("timestamp:", query.timestamp);
    console.log("user_id:", query.user_id);
    console.log("user_name:", decodeURIComponent(query.user_name));
    console.log("user_type:", query.user_type);
    console.log("hmac:", query.hmac);

    // 필요한 경우 클라이언트에 응답을 반환할 수도 있습니다.
    //return "Parameters logged to console";
    this.redirectToCafe24(query, res);
  }
  redirectToCafe24(query: Record<string, string>, @Res() res: Response) {
    const clientId = process.env.CLIENT_ID;
    const mallId = query.mall_id;
    const redirectUri = encodeURIComponent(process.env.REDIRECT_URL);
    const scope = encodeURIComponent(
      "mall.read_community,mall.write_community",
    );
    // `state` 파라미터에 `mall_id`를 포함시켜 전달
    const state = `RANDOM_CSRF_TOKEN:${mallId}`;

    const oauthUrl = `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}&=mall_id={mallId}`;
    res.redirect(oauthUrl);
  }
  @Get("callback")
  async handleCallback(
    @Query("code") code: string,
    @Query("state") state: string,

    @Res() res: Response,
  ) {
    if (!code) {
      return res.status(400).send("인증코드가 없습니다.");
    }
    const [csrfToken, mallId] = state.split(":");
    console.log(csrfToken, mallId);
    if (!mallId) {
      return res.status(400).send("mall_id가 없습니다.");
    }
    try {
      const tokenResponse = await this.exchangeCodeForToken(code, mallId);
      return res.send(
        "Authentication successful. Access Token: " +
          tokenResponse.access_token,
      );
    } catch (error) {
      console.error(
        "인증코드를 토큰으로 변환하지 못하였습니다.",
        error.message,
      );
      return res.status(500).send("토큰 요청에 실패하였습니다.");
    }
  }
  private async exchangeCodeForToken(code: string, mallId: string) {
    const clientId = process.env.CLIENT_ID; // 실제 client_id
    const clientSecret = process.env.CLIENT_SECRET; // 실제 client_secret
    const tokenUrl = `https://${mallId}.cafe24api.com/api/v2/oauth/token`;

    // Basic 인증을 위한 Base64 인코딩된 client_id:client_secret 생성
    const authHeader = `Basic ${Buffer.from(
      `${clientId}:${clientSecret}`,
    ).toString("base64")}`;

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", process.env.REDIRECT_URL);

    try {
      const response = await axios.post(tokenUrl, params.toString(), {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "인증코드를 토큰으로 변환하지 못하였습니다.",
        error.message,
      );
      throw error;
    }
  }
}

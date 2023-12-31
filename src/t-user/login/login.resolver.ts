import { Resolver, Args, Mutation } from "@nestjs/graphql";
import { LoginService } from "@/t-user/login/login.service";

@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}
  @Mutation("login")
  async login(
    @Args("name") name: string,
    @Args("password") password: string,
  ): Promise<{ ok: boolean; message?: string; token?: string }> {
    return this.loginService.validateUser(name, password);
  }
}

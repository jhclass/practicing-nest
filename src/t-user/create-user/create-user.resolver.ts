import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { CreateUserService } from "@/t-user/create-user/create-user.service";
export interface CreateUserDto {
  name: string;
  password: string;
  email: string;
  phoneNum: string;
}
@Resolver()
export class CreateUserResolver {
  constructor(private createUserService: CreateUserService) {}
  @Mutation("createUser")
  async createUser(
    @Args("name") name: string,
    @Args("password") password: string,
    @Args("email") email: string,
    @Args("phoneNum") phoneNum: string,
  ) {
    const createUserDto: CreateUserDto = { name, password, email, phoneNum };
    return this.createUserService.createUserService(createUserDto);
  }
}

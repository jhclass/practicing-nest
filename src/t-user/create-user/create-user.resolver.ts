import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { CreateUserService } from "@/t-user/create-user/create-user.service";
@Resolver()
export class CreateUserResolver {
  constructor(private createUserService: CreateUserService) {}
  @Mutation("createUser")
  async createUser(
    @Args("name") name: string,
    @Args("password") password: string,
    @Args("email") email: string,
  ) {
    return this.createUserService.createUserService(name, password, email);
  }
}

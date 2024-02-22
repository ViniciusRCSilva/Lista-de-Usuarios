import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./models/User";
import crypto from 'crypto'

@Resolver()
export class UserResolver {
    private data: User[] = []

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: crypto.randomUUID(), name }

        this.data.push(user)

        return user
    }

    @Mutation(() => User)
    async deleteUser(
        @Arg('id') id: string
    ) {
        const userIndex = this.data.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        const deletedUser = this.data.splice(userIndex, 1)[0];
        return deletedUser;
    }
}
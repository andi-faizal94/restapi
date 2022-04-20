import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../entity/User";

define(User, (faker: typeof Faker) => {
  const gender = faker.random.uuid();
  const userName = faker.name.firstName(gender);

  const user = new User();
  user.userName = userName;

  return user;
});

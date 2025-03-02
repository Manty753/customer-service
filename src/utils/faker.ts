import { faker } from '@faker-js/faker';
import { Customer } from '../customers/interfaces/customer.interface';
export function createRandomUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'international' }),
  };
}

export const users: Customer[] = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

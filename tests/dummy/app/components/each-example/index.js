// BEGIN-SNIPPET each-example.js
import Component from '@glimmer/component';
import { faker } from '@faker-js/faker';

function generate(factory) {
  const length = Math.floor(Math.random() * 4 + 2);
  return Array.from({ length }, factory);
}

export default class extends Component {
  get data() {
    return {
      companies: generate(() => ({
        name: faker.company.name(),
        departments: generate(() => ({
          name: faker.commerce.department(),
          products: generate(() => ({
            name: faker.commerce.productName(),
          })),
          supervisors: generate(() => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
          })),
        })),
        warehouses: generate(() => ({
          location: faker.address.city(),
        })),
      })),
    };
  }
}
// END-SNIPPET

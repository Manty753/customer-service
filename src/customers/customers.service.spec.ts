import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('DataService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a customer', () => {
    const customer = service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    expect(customer.name).toEqual('John');
    expect(customer.email).toEqual('john@example.com');
    expect(customer.phone).toEqual('1234567890');
    expect(customer.id).toBeTruthy();
  });

  it('should find all customers', () => {
    service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    const customers = service.findAll();
    expect(customers.length).toBeGreaterThan(0);
  });
  it('should update customers', () => {
    const newCustomer = service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    const customers = service.update(newCustomer.id, {
      email: 'john@updated.com',
    });
    expect(customers.email).toBe('john@updated.com');
  });
});

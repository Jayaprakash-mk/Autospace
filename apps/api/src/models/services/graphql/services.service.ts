import { Injectable } from '@nestjs/common'
import { FindManyServiceArgs, FindUniqueServiceArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateServiceInput } from './dtos/create-service.input'
import { UpdateServiceInput } from './dtos/update-service.input'

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceInput: CreateServiceInput) {
    return this.prisma.service.create({
      data: createServiceInput,
    })
  }

  findAll(args: FindManyServiceArgs) {
    return this.prisma.service.findMany(args)
  }

  findOne(args: FindUniqueServiceArgs) {
    return this.prisma.service.findUnique(args)
  }

  update(updateServiceInput: UpdateServiceInput) {
    const { uid, ...data } = updateServiceInput
    return this.prisma.service.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueServiceArgs) {
    return this.prisma.service.delete(args)
  }
}

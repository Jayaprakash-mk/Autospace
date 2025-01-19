import { Injectable } from '@nestjs/common'
import {
  FindManyServiceAssignmentArgs,
  FindUniqueServiceAssignmentArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateServiceAssignmentInput } from './dtos/create-service-assignment.input'
import { UpdateServiceAssignmentInput } from './dtos/update-service-assignment.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ServiceAssignmentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceAssignmentInput: CreateServiceAssignmentInput) {
    return this.prisma.serviceAssignment.create({
      data: createServiceAssignmentInput,
    })
  }

  findAll(args: FindManyServiceAssignmentArgs) {
    //return this.prisma.serviceAssignment.findMany(args)
    //changed the above line due to unidentified error - solve it later
    return this.prisma.serviceAssignment.findMany(
      args as Prisma.ServiceAssignmentFindManyArgs,
    )
  }

  findOne(args: FindUniqueServiceAssignmentArgs) {
    return this.prisma.serviceAssignment.findUnique(args)
  }

  update(updateServiceAssignmentInput: UpdateServiceAssignmentInput) {
    const { serviceId, ...data } = updateServiceAssignmentInput
    return this.prisma.serviceAssignment.update({
      where: { serviceId },
      data: data,
    })
  }

  remove(args: FindUniqueServiceAssignmentArgs) {
    return this.prisma.serviceAssignment.delete(args)
  }
}

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn('uuid') 
  @Field(() => ID) 
  id: string;      

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;
}
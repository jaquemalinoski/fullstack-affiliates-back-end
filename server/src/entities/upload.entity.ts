import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
  
  import { v4 as uuid } from "uuid"
  
  @Entity("affiliates")
  export class Affiliate {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string
  
    @Column()
    type: string
  
    @Column()
    date: string;

    @Column()
    product: string

    @Column()
    amount: string

    @Column()
    seller: string
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
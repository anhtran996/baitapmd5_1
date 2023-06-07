import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Moto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar'})
    name: string;
    @Column()
    price: number;
    @Column()
    displacementVehicle: string;
    @Column()
    discription: string; 
}
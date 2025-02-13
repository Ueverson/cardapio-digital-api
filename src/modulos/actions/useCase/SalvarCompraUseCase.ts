import { prisma } from "../../../database/prismaClient";


 interface Produto {
     cli_id:  number
     pro_id: number
     ped_status : string
     ped_horario : Date
     ped_quantidade: number
 }

export class SalvarCompraUseCase {
    async execute({cli_id, pro_id, ped_status, ped_horario, ped_quantidade}: Produto) {

        const pedido = await prisma.ped_pedidos.create({
            data: {
                cli_id,
                pro_id, 
                ped_status,
                ped_horario,
                ped_quantidade
            }
        })
        
        return pedido;
    }
}
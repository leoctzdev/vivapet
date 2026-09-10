import { CuidadorController } from "@/controllers/CuidadorController/CuidadorController";

const cuidadorController = new CuidadorController();

export async function GET(req: Request, {params}: {params: Promise <{id_cuidador: string}>}) {
    
    const resolveParams = await params;

    return cuidadorController.buscarPorId(req, resolveParams);
}

export async function PUT(req: Request, {params}: {params: Promise <{id_cuidador: string}>}) {
    
    const resolveParams = await params;

    return cuidadorController.atualizar(req, resolveParams);
}
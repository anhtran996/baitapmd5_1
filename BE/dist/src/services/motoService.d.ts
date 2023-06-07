declare class MotoService {
    private motoRepository;
    constructor();
    showAll: () => Promise<any>;
    addMoto: (Moto: any) => Promise<void>;
    editMoto: (id: any, Moto: any) => Promise<void>;
    removeMoto: (id: any) => Promise<void>;
    findByNameMoto: (name: any) => Promise<any>;
}
declare const _default: MotoService;
export default _default;

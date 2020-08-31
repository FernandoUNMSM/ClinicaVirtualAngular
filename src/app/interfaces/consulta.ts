export interface Consulta {
    _id?: string;
    especialidad: string;
    alergia: string;
    medicamento: string;
    email: boolean;
    sintomas: string[];
    user: string;
    time: boolean;
    __v?: number;
}

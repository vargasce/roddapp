 /** Nueva SUCURSAL MODELS
 * @Observations : Modelos de estructura para nueva sucursal
 * 
 * Ingreso de nueva sucursal
 */
export class NuevaSucursalModel {
    constructor (
        public token:string, 
        public nombre:string,
        public idciudad:string,
        public latlong:string,
        public direccion:string,
        public telefono:string,
        public email:string
    ){

    }
}

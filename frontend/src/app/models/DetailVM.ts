export enum DetailMode {
    Add    = 1,
    Update = 2,
    Delete = 3,
    View   = 4,
}

export interface DetailData {
    mode:     DetailMode,
    data:     any,
    lastData: any,
}
export interface Invitation {
    id: number, 
    name: string, 
    surname: string,
    email: string,
    phone: string,
    parkingReservation: boolean,
    parkingPlateNumber?: string,
    parkingSpot?: string,
    status: number
}

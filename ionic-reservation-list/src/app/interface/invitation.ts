export interface Invitation {
    id: number, 
    name: string, 
    surName: string,
    eMail: string,
    phoneNumber: string,
    parkingReservation: boolean,
    parkingPlateNumber?: string,
    parkingSpot?: string,
    status: 1
}

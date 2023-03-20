export interface Location {
    name: string
    bookings: Booking[]
}

export interface Booking {
    location: string
    startingDate: Date
    endingDate: Date
    price: number
}

const locations: Location[] = [
    {
        name: 'Stillwater Launch Center',
        bookings: [
            {
                location: 'Stillwater',
                startingDate: new Date('2023-08-01T08:23:00.000Z'),
                endingDate: new Date('2023-08-01T18:00:00.000Z'),
                price: 13463,
            },
        ],
    },
    {
        name: 'Oklahoma City Launch Center',
        bookings: [
            {
                location: 'Oklahoma City',
                startingDate: new Date('2023-08-05T07:34:00.000Z'),
                endingDate: new Date('2023-08-05T18:00:00.000Z'),
                price: 17476,
            },
        ],
    },
    {
        name: 'Tulsa Launch Center',
        bookings: [
            {
                location: 'Tulsa',
                startingDate: new Date('2023-08-01T03:45:00.000Z'),
                endingDate: new Date('2023-08-01T18:00:00.000Z'),
                price: 35783,
            },
        ],
    },
]

export default locations

'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CarCard } from './CarCard'
import { useCallback } from 'react'

const cars = [
    {
        id: "1",
        name: "2024 Tesla Model 3",
        category: "Sedan",
        pricePerHour: 25,
        imageUrl: "/placeholder.svg?height=200&width=300",
        transmission: "Automatic",
        mileage: "45000 Kms",
        brakes: "ABS Brakes",
        fuelType: "Electric",
        rating: 4.7
    },
    {
        id: "2",
        name: "2024 BMW 5 Series",
        category: "Sedan",
        pricePerHour: 35,
        imageUrl: "/placeholder.svg?height=200&width=300",
        transmission: "Automatic",
        mileage: "30000 Kms",
        brakes: "ABS Brakes",
        fuelType: "Petrol",
        rating: 4.8
    },
    {
        id: "3",
        name: "2024 Mercedes GLC",
        category: "SUV",
        pricePerHour: 40,
        imageUrl: "/placeholder.svg?height=200&width=300",
        transmission: "Automatic",
        mileage: "25000 Kms",
        brakes: "ABS Brakes",
        fuelType: "Diesel",
        rating: 4.9
    }
]

export function CarCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
        dragFree: true
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 p-4">
                    {cars.map((car) => (
                        <div key={car.id} className="flex-[0_0_auto]">
                            <CarCard {...car} />
                        </div>
                    ))}
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg"
                onClick={scrollPrev}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg"
                onClick={scrollNext}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}

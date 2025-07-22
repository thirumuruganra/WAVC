"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function HomeCalendar() {
  const [date, setDate] = React.useState(new Date())

  return (
    <div className="bg-white rounded-lg p-4 w-full h-full flex flex-col items-center justify-center -mt-8">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md"
      />
    </div>
  )
}
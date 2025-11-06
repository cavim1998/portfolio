export interface CardExperienceProps {
  title: string
  startDate: string
  endDate?: string
  description: string
}

function CardExperience(props: CardExperienceProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <p className="font-bold text-2xl">{props.title}</p>
        <div className="flex items-center justify-end">
          {
            `${props.startDate} - ${props.endDate || 'present'}`
          }
        </div>
      </div>
      <p className="text-sm text-gray-400">{props.description}</p>
    </div>
  )
}

export default CardExperience
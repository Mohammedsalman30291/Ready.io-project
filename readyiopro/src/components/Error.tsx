type Props = {
  message: string
}

export default function Error({ message }: Props) {
  return <p className="error">{message}</p>
}

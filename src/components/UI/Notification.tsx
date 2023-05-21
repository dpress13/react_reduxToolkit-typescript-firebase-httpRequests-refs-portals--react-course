import style from './Notification.module.css';

type Props = {
  message: string,
  status: string,
  title: string,
};
// Used on App
export default function Notification({ message, status, title }: Props) {
  let specialStyle = '';

  if (status === 'error') {
    specialStyle = style.error;
  }
  if (status === 'success') {
    specialStyle = style.success;
  }

  const cssStyle = `${style.notification} ${specialStyle}`;

  return (
    <section className={cssStyle}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
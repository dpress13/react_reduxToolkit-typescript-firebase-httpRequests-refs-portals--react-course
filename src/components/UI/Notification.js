import style from './Notification.module.css';

// Used on App
export default function Notification ({ message, status, title }) {
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
};
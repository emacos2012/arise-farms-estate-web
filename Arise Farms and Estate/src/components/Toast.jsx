import { useCart } from '../context/CartContext';
import './Toast.css';

function Toast() {
  const { toast } = useCart();

  if (!toast.show) return null;

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-icon">
        {toast.type === 'success' ? '✓' : toast.type === 'error' ? '✕' : 'ℹ'}
      </div>
      <div className="toast-message">{toast.message}</div>
    </div>
  );
}

export default Toast;


// Icons
import OpenEye from '../../assets/svg/eye.svg';
import ClosedEye from '../../assets/svg/closedEye.svg';

export function showPassword(fieldType, setFieldType, setEyeIcon) {
  if (fieldType === 'password') {
    setFieldType('text');
    setEyeIcon(ClosedEye);
  }
  if (fieldType === 'text') {
    setFieldType('password');
    setEyeIcon(OpenEye);
  }
}

export function showConfirmPassword(fieldType, setFieldTypeConfirm, setEyeIconConfirm) {
  if (fieldType === 'password') {
    setFieldTypeConfirm('text');
    setEyeIconConfirm(ClosedEye);
  }
  if (fieldType === 'text') {
    setFieldTypeConfirm('password');
    setEyeIconConfirm(OpenEye);
  }
}

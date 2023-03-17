import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "../../../Image";
import styles from './AccountItem.module.scss';

const cx=classNames.bind(styles)


function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/36cdb8ef8a179fa03fe6f0ffb13978fd~c5_100x100.jpeg?x-expires=1679104800&x-signature=6nVrI0HHEEGnIrn7d4%2B6O8znygY%3D"
        alt="Hoaa" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span> Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </h4>
        <span className={cx('username')}>nguyen van a</span>
      </div>
    </div>
  )
}
export default AccountItem
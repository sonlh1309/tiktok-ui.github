
import { useEffect, useState, useRef } from 'react';
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../AccountItem/Index";
import { SearchIcon } from "../../../Icons";


const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef()
  

  const handleClear = () => {
    setSearchValue('');
    // setSearchResult([]);
    inputRef.current.focus();
  };
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1 ,2 ,3 ,4])
    }, 0)
  }, [])

    
  return (
  <HeadlessTippy
    interactive
    visible={searchResult.length > 0}
      render={attrs => (
      <div className={cx('search-result')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <h4 className={cx('search-title')}>
              Account
            </h4>
            <AccountItem/ >
            <AccountItem/ >
            <AccountItem />
            <AccountItem/ >
        </PopperWrapper>
      </div>
    )}>
    <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={e => setSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
      
      {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <SearchIcon/>
        </button>  
    </div>
    </HeadlessTippy>
  )
}
export default Search;
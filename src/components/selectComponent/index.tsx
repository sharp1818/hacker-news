/* eslint-disable react/jsx-props-no-spreading */
import { useState, useRef, SetStateAction } from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CloseRounded from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/joy/IconButton';
import { GetSelectImage, SelectQuery } from '../../utils/helper';
import './selectComponent.css';

function SelectComponent() {
  const [value, setValue] = useState('');
  const action = useRef(null);
  const handleChange = (e: SetStateAction<string> | any) => {
    setValue(e);
    SelectQuery(e);
  };

  return (
    <div className="select-container">
      <Select
        size="sm"
        action={action}
        value={value}
        placeholder="Select your news"
        onChange={(e) => {
          handleChange(e);
        }}
        indicator={<KeyboardArrowDown />}
        {...(value && {
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                handleChange('');
              }}>
              <CloseRounded />
            </IconButton>
          ),
          indicator: null
        })}
        sx={{
          borderRadius: '4px',
          width: '15rem',
          height: '2rem',
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)'
            }
          }
        }}>
        <Option value="angular" className="option-container">
          <img src={GetSelectImage('ANGULAR')} alt="ANGULAR" className="icon-container" />
          <span className="option-text-container">Angular</span>
        </Option>
        <Option value="react" className="option-container">
          <img src={GetSelectImage('REACT')} alt="REACT" className="icon-container" />
          <span className="option-text-container">React</span>
        </Option>
        <Option value="vue" className="option-container">
          <img src={GetSelectImage('VUE')} alt="VUE" className="icon-container" />
          <span className="option-text-container">Vue</span>
        </Option>
      </Select>
    </div>
  );
}

export default SelectComponent;

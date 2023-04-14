import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';

const Toolbar = (props) => {
  const { filters, selected, onSelectedFilter } = props;
  
  return (
    <div className='toolbar'>
      {filters.map((filter) => {
        const isSelected = filter === selected;
        const btnClasses = cn('btn', { active: isSelected });

        return (
          <button key={uniqueId()} className={btnClasses} onClick={onSelectedFilter(filter)}>
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;

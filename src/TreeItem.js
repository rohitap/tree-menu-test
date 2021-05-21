import React from 'react';
import TreeView from './TreeView';
import PropTypes, { object } from 'prop-types';

const TreeItem = ({ title, children, url, searchData, showElement }) => {
  return (
    <div key={`${title}${url}`} data-testid="tree-item">
      <li className={'li-custom'} style={{ display: showElement ? 'block' : 'none' }}>
        <a href={url} rel="noreferrer" target="_blank"> {title} </a>
      </li>
      {children && <TreeView treeData={children} searchData={searchData}/>} 
    </div>
  )
}

TreeItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(object),
}

export default React.memo(TreeItem);


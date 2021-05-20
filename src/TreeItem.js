import React from 'react';
import TreeView from './TreeView';

const TreeItem = ({ title, children, url, searchData, showElement }) => {
  return (
    <div key={`${title}${url}`} data-testid="tree-item">
      <li className={'li-custom'} style={{ display: showElement ? 'list-item' : 'none' }}>
        <a href={url} rel="noreferrer" target="_blank"> {title} </a>
      </li>
      {children && <TreeView treeData={children} searchData={searchData}/>} 
    </div>
  )
}

export default React.memo(TreeItem);


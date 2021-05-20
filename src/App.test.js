import { render, fireEvent } from '@testing-library/react';
import useTreeData from './hooks/useTreeData';
import {renderHook, act} from '@testing-library/react-hooks'
import TreeData from './treeData';
import TreeContainer from './TreeContainer';
import TreeItem from './TreeItem';
import { search } from './utils/helper';

describe('Component should render properly', () => {
  it('TreeContainer component should render correctly', () => {
    const { queryByTestId } = render(<TreeContainer data={TreeData}/>);
    expect(queryByTestId("tree-container")).toBeTruthy();
  })

  it('TreeItem component should render correctly', () => {
    const { queryByTestId } = render(<TreeItem />);
    expect(queryByTestId("tree-item")).toBeTruthy();
  })
});

describe('Search Field', () => {
  it('Search field should work properly', () => {
    const { queryByPlaceholderText } = render(<TreeContainer data={TreeData}/>);
    const searchInput = queryByPlaceholderText('Enter Text...');
    fireEvent.change(searchInput, {target: {value: 'g'}});
    expect(searchInput.value).toBe('g');
  })
})

describe('Test useTree hook', () => {
  let hookData; 
  beforeEach(() => {
    hookData = renderHook(() => useTreeData());
  })

  it('Hook Initial states should contain proper type', () => {
    const initialStates = hookData.result.current;
    expect(initialStates).toMatchObject({
      loading: true,
      error: false,
      data: []
    });
  })

  it('Hook Initial state should be updated after API call',  async () => {
    await hookData.waitForNextUpdate();
    expect(hookData.result.current).toMatchObject({
      loading: false,
      error: false,
      data: TreeData
    });
  })
})  


describe('Check Search filtering functionality on tree menu data', () => {
  it('It should return respective component root node', () => {
    const filteredNodes = search('getting', TreeData);
    expect(filteredNodes).toMatchObject({
      'Getting started-getting-started': true
    });
  })

  it('It should return the sub nodes tree alongwith parent nodes',  async () => {
    const output = {
      'API-api': true,
      'Adding a Blog-guides/adding-a-blog': true,
      'Arguments-cli/args': true,
      'CLI Commands-api/cli-commands': true,
      'Commands-cli/cmds': true,
      'Creating your site-getting-started/creating-your-site': true,
      'Custom Pages-guides/custom-pages': true,
      'Enabling Search-guides/enabling-search': true,
      'Getting started-getting-started': true,
      'Installation-getting-started/installation': true,
      'Navigation and Sidebars-guides/navigation-and-sidebars': true,
      'Site preparation-getting-started/site-preparation': true,
      'Translations & Localization-guides/trans-and-nav': true,
      'start-cli/args/start': true
    }
    const filteredNodes = search('a', TreeData);
    expect(filteredNodes).toMatchObject(output);
  })
})  
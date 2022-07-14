import { CSSProperties, useState } from 'react';

export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = () => null;

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ children: tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div style={style.tabsContainer}>
      <div style={style.tabsHeader}>
        {tabs.map((tab, i) => (
          <button key={i} style={style.tabButton} onClick={() => setActiveTab(i)}>
            {tab.props.label}
          </button>
        ))}
      </div>
      <div style={style.tabsContent}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {i === activeTab ? (
              <div style={{ ...style.tabContent, ...style.tabContentActive }}>
                {tab.props.children}
              </div>
            ) : (
              <div style={style.tabContent}>{tab.props.children}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  tabsContainer: {
    width: 400,
    height: 400,
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
  },
  tabsHeader: {
    borderBottom: '1px solid blue',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    minHeight: 30,
  },
  tabsContent: {
    flex: 1,
  },
  tabButton: {
    border: '1px solid blue',
    minWidth: 30,
    minHeight: 30,
  },
  tabContent: {
    display: 'none',
  },
  tabContentActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
};

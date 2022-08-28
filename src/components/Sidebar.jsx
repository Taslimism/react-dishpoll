import shallow from 'zustand/shallow';
import useSideBarState from '../store/sidebar.store';
import SidebarButton from './SidebarButton';

const sidebarText = ['Poll', 'Results'];

const Sidebar = () => {
  const { color, setColor } = useSideBarState(
    state => ({
      color: state.color,
      setColor: state.setColor,
    }),
    shallow,
  );

  return (
    <div className="hidden lg:block lg:col-span-2 pt-4 h-screen border-r">
      <div className="flex flex-col items-start gap-2">
        {sidebarText.map((text, index) => (
          <SidebarButton
            key={text}
            color={color}
            clickHandler={setColor}
            index={index}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

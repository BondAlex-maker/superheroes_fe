import { Menu, Dropdown } from 'antd';

export default function SuperheroActionsDropDown({onDelete, onEdit}){
const menu = (
    <Menu>
        <Menu.Item key={'edit'} onClick={onEdit}>
            Edit
        </Menu.Item>
        <Menu.Item danger key={"delete"} onClick={onDelete}>Delete</Menu.Item>
    </Menu>
);

    return(
    <Dropdown overlay={menu} placement="bottomRight">
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <div>...</div>
        </a>
    </Dropdown>
    );
}
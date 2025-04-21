import Naviagation2 from "@layout/Navigation2";

interface TeacherNavyProps {
    OnMenuList : boolean[];
}

export default function TeacherNavy(props : TeacherNavyProps) {
    return (
        <Naviagation2 
        OnMenuList={props.OnMenuList}
        MenuLists={[["/changeclass", "자리 바꾸기"], ["divideteam", "자리 나누기"]]} />
    )
}
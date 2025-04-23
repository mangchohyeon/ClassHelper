import Naviagation2 from "@layout/Navigation2";

interface TeacherNavyProps {
    OnMenuList : boolean[];
}

export default function TeacherNavy(props : TeacherNavyProps) {
    return (
        <Naviagation2 
        OnMenuList={props.OnMenuList}
        MenuLists={[["/teacher/changeclass", "자리 바꾸기"], ["/teacher/divideteam", "자리 나누기"]]} />
    )
}
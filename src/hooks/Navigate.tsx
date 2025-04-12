import { useNavigate } from "react-router-dom";

export function Navigate(to : string) {
    const navigate = useNavigate();
    navigate(to);
}

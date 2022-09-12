import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>
        <Link to='/' style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#9146FF", marginRight: "15px", display: "flex", alignItems: "center" }}>
                <PlayArrowIcon sx={{ fontSize: "40px" }} />
                <Typography variant='h5' align='center'>
                    Video Vibes
                </Typography>
            </span>
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar;

    import React, { useState, useEffect } from "react"
    import DropdownTreeSelect from "react-dropdown-tree-select"
    import 'react-dropdown-tree-select/dist/styles.css'

    function DebugSelector() {
        const [mySelected, setMySelected] = useState([]);
        const [lastChanged, setLastChanged] = useState({});
        const tarifs = {
            label: "all tarifs", value: "all", children: [
                { label: "second level tarif", value: "secondLevel" },
                { label: "another 2nd level", value: "secondLevel2" }
            ]
        }
        const onChange = function (currNode, selectedNodes) {
            debugger
            //setMySelected(selectedNodes);
            //setMySelected([...selectedNodes]);
            //setLastChanged(currNode);
            //setLastChanged(JSON.parse(JSON.stringify(currNode)))

        }
        return (
            <DropdownTreeSelect data={tarifs} onChange={onChange}></DropdownTreeSelect>
        )
    }
    export default DebugSelector;
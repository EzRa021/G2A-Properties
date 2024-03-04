const Icons = () => {
    return ( 
        <>
        </>
     );
}

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "Size", uid: "size", sortable: true},
  {name: "FileType", uid: "fileType", sortable: true},
  {name: "LastModified", uid: "lastModified", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    size: "1.1mb",
    fileType:"pdf",
    lastModified:"11/11/25"
  },
  {
    id: 2,
    name: "Adam Slander",
    size: "1.1mb",
    fileType:"JPG",
    lastModified:"11/11/25"
  },
  {
    id: 3,
    name: "Badejo Olamide",
    size: "10.1mb",
    fileType:"JPG",
    lastModified:"11/11/25"
  },
  {
    id: 4,
    name: "Elon Musk",
    size: "2.1mb",
    fileType:"PNG",
    lastModified:"11/11/25"
  },
  {
    id: 5,
    name: "Jeff Bezos",
    size: "3.1mb",
    fileType:"JPG",
    lastModified:"11/11/25"
  },
  {
    id: 6,
    name: "Keanu Reeves",
    size: "9.1mb",
    fileType:"JPG",
    lastModified:"11/11/25"
  },
];

export {columns, users, statusOptions};

export const VerticalDotsIcon = ({size = 24, width, height, ...props}) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
  
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  export const ChevronDownIcon = ({strokeWidth = 1.5, ...otherProps}) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );  
export const PlusIcon = ({size = 24, width, height, ...props}) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
  
  
  
export const SearchIcon = (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="true"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props} className="text-black font-bold"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
  
 
export default Icons;
import {
  ListItem,
  ListItemText,
  MenuItem as MuiMenuItem,
  Select,
  SxProps,
} from "@mui/material";

type OptionValue = string | number | boolean;

export interface MenuItemProps {
  label: string;
  options: Record<string, OptionValue>;
  selected: OptionValue;
  onSelected: (value: OptionValue) => void;
  selectSx?: SxProps;
}

/**
 * @example
 * <MenuItem
    label={t("Log Level")}
    options={options}
    selected={selected}
    onSelected={(value) => {
      console.log(value);
    }}
    selectSx={{ width: 100 }}
  />
 *
 * @returns {React.JSX.Element}
 * React.JSX.Element
 *
 * `MenuItem extends MuiMenuItem. Support options api.`
 *
 * @author keiko233 <i@elaina.moe>
 * @copyright LibNyanpasu org. 2024
 */
export const MenuItem = ({
  label,
  options,
  selected,
  onSelected,
  selectSx,
}: MenuItemProps) => {
  return (
    <ListItem sx={{ pl: 0, pr: 0 }}>
      <ListItemText primary={label} />

      <Select
        size="small"
        value={selected}
        inputProps={{ "aria-label": "Without label" }}
        onChange={(e) => {
          onSelected(e.target.value);
        }}
        sx={{ width: 104, ...selectSx }}
      >
        {Object.entries(options).map(([key, value]) => (
          <MuiMenuItem
            key={key}
            value={key}
            disabled={key === selected}
            selected={key === selected}
          >
            {value}
          </MuiMenuItem>
        ))}
      </Select>
    </ListItem>
  );
};

export default MenuItem;
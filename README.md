# Interactive-Dashboard
WEB-115 Interactive Dashboard

## Future Enhancements

- [x] Add a weekly task goal calculator

## Weekly Task Goals

The Weekly Task Goals feature calculates a user's weekly task target based on their daily task goal and additional weekly bonus tasks. The calculator multiplies the daily goal by five workdays and then adds the bonus tasks to determine the user's total weekly task goal.

## Imperial/Metric Converter

The Imperial/Metric Converter is a tool that allows users to convert measurements between Imperial and Metric units. The application can convert inches, feet, yards, and miles to metric units such as centimeters, meters, and kilometers. It can also convert centimeters, meters, and kilometers back to Imperial units.

### Logic and Pseudocode

BEGIN

INPUT value
INPUT conversion

IF conversion = "inch to centimeter" THEN
    SET result = value * 2.54
    WRITE result

ELSE IF conversion = "foot to centimeter" THEN
    SET result = value * 30.48
    WRITE result

ELSE IF conversion = "yard to meter" THEN
    SET result = value * 0.91
    WRITE result

ELSE IF conversion = "mile to kilometer" THEN
    SET result = value * 1.61
    WRITE result

ELSE IF conversion = "centimeter to inch" THEN
    SET result = value * 0.39
    WRITE result

ELSE IF conversion = "centimeter to foot" THEN
    SET result = value * 0.0328
    WRITE result

ELSE IF conversion = "meter to yard" THEN
    SET result = value * 1.09
    WRITE result

ELSE IF conversion = "kilometer to mile" THEN
    SET result = value * 0.62
    WRITE result

ELSE
    WRITE "Invalid conversion"

END IF

DISPLAY result


END
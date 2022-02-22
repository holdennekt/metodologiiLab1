# Software developing methods lab1
## Quadratic equation solver
This small app can solve quadratic equations in 2 modes:
- Interactive(coefficients a, b, c are being inputed from console)
- Non-interactive(coefficients a, b, c are being inputed from file)

To use app
clone repo by running
```bash
$ git clone https://github.com/holdennekt/metodologiiLab1
```
or just download *equation.js* file.

Then change directory to find *equation.js* and run
```bash
$ node equation.js
```
for interactive mode or
```bash
$ node equation.js /some/file/path.txt
```
for non-interactive mode.

If you're using non-interactive mode, the file must follow this format: **NUMBER**\s**NUMBER**\s**NUMBER**\n

E.G.
```
1 -5 6

```

Revert commit: [aa525ac46685aadf3e00369b8f350866c2243e6b](https://github.com/holdennekt/metodologiiLab1/commit/aa525ac46685aadf3e00369b8f350866c2243e6b)
/* eslint-disable */
import SimLauncher from '../../joist/js/SimLauncher.js';
const image = new Image();
const unlock = SimLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAYAAAD845PIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACrRJREFUeNrUmsuPHNUVxn/nVnX39LR7umem582MPTO2bDAmgCFRHoqyQCJsklgRggWQLIhCRDY4PIwhf0JWkaK8lGRBXiBlwQYpi4RIJEIJEkEiQgoOCfIj+DXjefWjHvdkcau6q3va9tgzg5SR7tSt6qque+o75zvfOdXC52b5GP4GQY4DPwIu7vbNPGYru2+ScD+qPwHeBd7Z7dsZFHZ9WJ7BCMDxj+N+HrcM7d4jU8DarzLgP+PdNg2rzUkawRlE3v7/RQqgFT1vxsqY/ePIRBnC+CQgu4vUTHmXUFKI7aOUCk/6h6dBBDOYRy9vDNMIVhDe3D2i2A2jFBAgiH/rHRivmdkRWGsiQ0WIFf1o5U5874dYDXbHqKnyLhCDQmy/TXXwsdyRGUeA1n1mKkXs5Y09rLcCkD+B7Pj9DSLs6EDANwWsPufvG0UqRQgt4gvEFikV8OZroPo0IuNY61x1B4fH9A67n1Ww9lmplY7l7phFbPL4RBARsIoZKWGX6nlWGh7I793D2En3Gy8lC9mBEVsQRrDxb3JHbil6M8PQCBHjDBIjiCqmVAAEe275XsS8RGyvIDtJ6TvpzKoQxc/KVGXEnx+DZoB4gnjGDSNgDNoI8feOYqarPlH03M5T+nhpZ74sVhCZw5Nf5e+c8/ypKtqMOiglMScGRBUZLIAnxGeW7wF5hchebDPnNofPgL9zNB6EJ8zMcD63MIY2AoeOdNKWZCZab+HPjRDPjRC/f+EkKo9gdyqmaoPuKW9nBBYMh/DNL/JH9+FPDEEzQjzTZkWHFgliIAoy4IPvEZ9dvgOrrxHZs5jtG+UT2p1hvDh6zjs0SX5hDK2HSM4kGTijMBDUKpIkZ62H+LMjRA6t5xkrHdsJpHx3s238xRZy3t0U81/P3zqN5H1oRWASlLJGqaN2rEWtiy0Ucgcnic9d+QobwRdoxa/jm20aZXV7caQCcfyivzhJbr6GbgSIb3ClhnROtIKqIlZRI0h6eT3Anx7G31cjevv0C0S87nxTtmHURGl7SIXx5wnjY/lD05148TzILNwhpGATWagGVYsY95nGltyBCaLTS/ex1PgSzfhVctsx6krr5lW4EdD4ZO7wDLm5UXSjhfgeYgx4krBdZ+GSeJVaRcRVHxhB6wHexBD+whjR8ocvorxKK07QvhmjVm/SqNBC0fsiY4P35w/PgLVAohr8JNFKSiLJ4i0giUEmyW0IIooGEbnFcaJ/X7yXXPAI8NLNG+XJzaGUN5CT7+YOTuJPV9G1pnO7lMJ9k4gM64wTydQkLo5FBE3iRxshXm0PucVxwndOnyTkJYKIm1mfR7lw4xqvEUPRf4jJ8lPFTy04xottlxyS5ClrwnApywqd/TTU3Gcu5mSoSHx+ZYzlxgXWgrew6rziBobPSPHGUQIIoxdyi+N442V0pYnkvC7qtrHtMGS7tlf0Gi0nbYaYShF/YYzwwvrzhP5PiTS8UbQ8KgWI7NZGbKEewoD/OBPlxweOzjvGU23rOxFBUirXrJ0ZxJK5dB1PVhTFmEqReHmjwlqzznr4BsgNeZLcUD3lEq1QyZ3Kf2b/Qv7oPnS1gfENmMT1PHHsJySyQZPYcjdUa91WFXW1F2rTuaJxjFSKhP84R/jmB5cpFRbJmZUbQ2qokATyFkZooZw7LnuHHy7cNdd5OoaOGs8q7TR+SGMoMZBOlapZlFLXjmKkUiK+sjHIWitkJfgjzRga0ZaGML7F5BtZKPplasUPcp9eqOVvn0FXm5tqpdQ4kkS8ySCbGJMiox200uMaW2RogOjURcK/nNrgo/oijfA8eW+LlH5wdCttY4gU6sFxGdtT8+dG0PVWO27UaqK8NclFJDI8K6dSVLIoZdDKAIUIut7Cu6VKtHekpI3oBGH8FP7WjBJuH7/+WUEMQ/lxcnIqd2S2nDs0ha47lNroGHHSSAyufJCuWooslduMUbbPNnXrPQXiDy8TvvUf5czaAa60/kXB2wJSZ1avb1QzgsnBp+XIVNnbO4rdaLkUqh2lrSpOrIp17CeKardKzyKlSStNM52A9jYNs40WZrqCmayIXQ9OsCf/ja0oeJd8PXP1ESlUC/uYKv86d+uUMSMltBklhV+nKyZZV+1OTW0GTMmj26CeFlfWQquQzzlGX2vcTWR/x+XGBZTrJN9mdO1EG1qYGjwht1Q9M1lBN4JM8oFUBWnK4tZVI47RM8m2hxG1N7YywqIrx9VbeFMV7PkV7H/XXmA1eJh6eM3SxL9m2zlW8LiNcv6b3mTFqeY4dgWgdvoOWcNci0/RLvgyiyWLUMc4tRnXtNoBLIk/M13Fnl99iGb8fS41/sygz9XkiceefH/1EMQu2Y4MfM/MVD/hLY6RotpxuUS89ngevehk4epyQ+1xzQwDZlasQYypDKLNEF2pT7Hc+iXN2D30Pmv3uVjvT+H1CGrFe8l5j5qZYffliWhVdb1xNZpsBUG7Sou0K9uNlHbycW/y1W4jN8VbbDGTFezp5Qc46D9A3nsN36NfO8Jj0HdulR3gJP/0nh+YxdohMzcCjbCDSg85SPa/9FEUvepiExsmJUqbJ3qMcxW2e2tSD9Ag3Ecz+hmrLRfzrbhr+NTD/gXgdPk+JkpflvFyW6+JEZSkG5TGlEmrpLRb5KwS6VXoPUI/k3G1q8mrm+KtfU0UY2ZHsEsbn+X9pQe5UH+lH8X73D3V43rilLjak1Irw/BgGyVN1LhroCS5yLpLVFwTW5KOUVYd9ARL135WvfcjkK5rGwEyNIBMVdCl+kk2wleIlV7DPCoDjhSCGMIY1gIYHjjGcPGEmR3F5D0XS4m/dVxNOyUGdM3JKCSyi6OPwsii1Qm4LuboQhaQgo+2gknWg9MsNd7uJYzNZC8Ch0b+xp0z95j5GlIPEvkjmW4rfeYZaZQliL603pOI6UGIPuhlhXGpgH5wCfvuuX+y1DyIJ1339Cj6kDOu5xBamB16jP2jT5qZYafr4g6LSRdBSs+6r4ZUL61fB63eWKNP7NkErSAcBZa4VP8rIpkiseC32QXfwOHae3LrxCGZzTBeBo1sWdGeJwhLSo2bElePdtJroNXPHXv3raKlPHp6GX333Fneu7yfZtRMb+O16//Iwkz5WyyMfE2mqw4JaztulVlpBxlJUJFNi5VsB7frVYtuandkVaz2kkM/A5P+vRRzaBwP0QzrLDffIO+BZ/DwjCOJPXmfxeGXZapaZbQErTDpP3SevJCJnT75mqsc7duvvmp89RG/6GYXthaKiRpqBHex0voxjaiJCF7bF2eHvsPe6oMyXemU6ZJBJTu/WuxkTVG5fh8evQpi2qcOy6CUnhdbpJhHw6hIPbQsN/9AwcfDKpTyQ8xXX2aqMijVQQiitsBrx0lX3GRjp8dY7ZnrVXXtZtR6jaHbZbU3Lq1FB/JIZEHjTwI/ZyNYc2XkXPkk+0cfYGoYsUk2TV/FmLSFnMook7zmTOZGOvvpOZI9P/uTBNPp1nad1zmm6b7J9Dmyx7uOGVcilAcgiHyWG3k+2nhNmK/OM1F6nwNjHrWye5u+icVcv7t9LKX4NvOxqVLc6psYzSbmPhpxM3EIYDtVtVoYyMPSBvrhJfj7+aM+B2tP0Ag9zq6scmZFumGWvnlzi92Prb/j2pHfGYil4FfYW33ifwMAKVS47ByemlUAAAAASUVORK5CYII=';
export default image;
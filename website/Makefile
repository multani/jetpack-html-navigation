
DST=index.html

all: $(DST)

$(DST): index.rst
	rst2html --time --stylesheet=style.css --link-stylesheet index.rst > $(DST)

clean:
	rm -f $(DST)

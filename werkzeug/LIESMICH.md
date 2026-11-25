# Daten aus Doku-Fix holen

Physio-Know bekommt einige Daten als Kopie aus Doku-Fix, weil Doku-Fix sie beim Dokumentieren selbst braucht:
Fb (Krankheitsbild-Grunddaten), Fe (Tests), Lb (Quellen).

Ablauf:
1. Doku-Fix-Repository lokal mit `python3 -m http.server 8765` starten.
2. `python3 werkzeug/daten-holen-browser.py` erzeugt roh.json (lädt die App ohne Entsperren, liest die Daten aus).
3. Die Dateien in daten/ daraus neu schreiben (siehe Kopfzeilen).

Was ab jetzt nur noch hier gepflegt wird: Krankheitsbild-Karten (PK_KL), Plakate, Verordnung & Abrechnung, Wiederholung, Quiz, Patti, Forschung, Patientenblätter, Anatomie.

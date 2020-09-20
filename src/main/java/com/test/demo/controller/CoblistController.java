package com.test.demo.controller;

import com.test.demo.dto.CodeDto;
import com.test.demo.dto.FilePathDto;
import com.test.demo.services.FileHandlerService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MarkerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/coblist")
public class CoblistController {

    private final FileHandlerService fileHandlerService;

    @PostMapping

    public ResponseEntity<CodeDto> getOrcFormData(@RequestBody FilePathDto filePath) {
        log.info("coblist request " + filePath.toString());
        CodeDto result = this.fileHandlerService.getCoblist(filePath);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
/*
private final OrcService orcService;

private static final Logger log = LoggerFactory.getLogger(AccountController.class);

    private final AccountService accountService;
    private final AccountRegistrationCommandValidator validator;

    @Autowired
    public OrcController(OrcService orcService) {
        this.orcService = orcService;
    }

    @GetMapping("/formData")
    public ResponseEntity<OrcFormData> getOrcFormData() {
        formData = new OrcFormData(getWeaponOptions(), getOrcRaceTypes());
        return new ResponseEntity<>(formData, org.springframework.http.HttpStatus.OK);
    }

    private List<hu.progmasters.mordor.dto.WeaponOption> getWeaponOptions() {
        List<hu.progmasters.mordor.dto.WeaponOption> weaponOptions = new java.util.ArrayList<>();
        for (WeaponType weaponType : WeaponType.values()) {
            weaponOptions.add(new WeaponOption(weaponType));
        }
        return weaponOptions;
    }

    private List<OrcRaceTypeOption> getOrcRaceTypes() {
        List<OrcRaceTypeOption> orcRaceTypeOptions = new ArrayList<>();
        for (OrcRaceType orcRaceType : OrcRaceType.values()) {
            orcRaceTypeOptions.add(new OrcRaceTypeOption(orcRaceType));
        }
        return orcRaceTypeOptions;
    }

    @GetMapping
    public ResponseEntity<List<OrcListItem>> getOrcs() {
        return new ResponseEntity<>(orcService.listOrcs(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity saveOrc(@Valid @RequestBody OrcDetails orcDetails) {
        orcService.saveOrc(orcDetails);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OrcListItem>> deleteOrc(@PathVariable Long id) {
        boolean isDeleteSuccessful = orcService.deleteOrc(id);

        ResponseEntity<List<OrcListItem>> result;
        if (isDeleteSuccessful) {
            result = new ResponseEntity<>(orcService.listOrcs(), HttpStatus.OK);
        } else {
            result = ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return result;
    }

 */
}

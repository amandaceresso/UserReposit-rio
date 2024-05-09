import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjetoService {

    @Autowired
    private ProjetoRepository projetoRepository;

    public List<Projeto> buscarPorDescricao(String descricao) {
        return projetoRepository.findByDescricao(descricao);
    }
}

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/projetos")
public class ProjetoController {

    @Autowired
    private ProjetoService projetoService;

    @GetMapping("/buscarPorDescricao")
    public List<Projeto> buscarPorDescricao(@RequestParam String descricao) {
        return projetoService.buscarPorDescricao(descricao);
    }
}
